/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
interface FormData {
  name: string,
  email: string,
  subject: string,
  message: string,
  phone?: string,
}

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
}

type JsonValue = string | number | boolean | null | JsonObject | JsonArray | FormData;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {

    function customParse(str: string): JsonValue {
      if (typeof str !== 'string' || !str.trim().length) {
        throw new Error('Invalid input: Not a string or empty string');
      }
    
      function parseValue(valueStr: string): JsonValue {
        valueStr = valueStr.trim();
    
        if (valueStr.startsWith('{') && valueStr.endsWith('}')) {
          return parseObject(valueStr);
        } else if (valueStr.startsWith('[') && valueStr.endsWith(']')) {
          return parseArray(valueStr);
        } else if (valueStr === 'null') {
          return null;
        } else if (valueStr === 'true') {
          return true;
        } else if (valueStr === 'false') {
          return false;
        } else if (!isNaN(parseFloat(valueStr))) {
          return parseFloat(valueStr);
        } else if (valueStr.startsWith('"') && valueStr.endsWith('"')) {
          return valueStr.slice(1, -1);
        }
    
        throw new Error(`Invalid value: ${valueStr}`);
      }
    
      function parseObject(objStr: string): JsonObject {
        const obj: JsonObject = {};
    
        if (objStr.length === 2) {
          return obj;
        }
    
        const keyValuePairs = objStr.slice(1, -1).split(',');
        keyValuePairs.forEach((pair) => {
          const [key, value] = pair.split(':');
          obj[key.trim().slice(1, -1)] = parseValue(value);
        });
    
        return obj;
      }
    
      function parseArray(arrStr: string): JsonArray {
        const arr: JsonArray = [];
    
        if (arrStr.length === 2) {
          return arr;
        }
    
        const values = arrStr.slice(1, -1).split(',');
        values.forEach((value) => {
          arr.push(parseValue(value));
        });
    
        return arr;
      }
    
      return parseValue(str);
    }


    let values = await request.text();
    if(values.length > 0) {
      console.log(values.length)
      const parsed = customParse(values) as FormData;

      const mailerSend = new MailerSend({
        apiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmE2ZmVmMWY4ZTliNzViZWE2OWMwNjA4NTE1ODQ0ZWFlNTJhNDFmMmZlMzVhNWVmMTMxMWFhM2ZkMjg3MGIzZWFjZmYyMDI3NmZhNGRmNmMiLCJpYXQiOjE2NzkwOTcwMDAuNzg2ODg0LCJuYmYiOjE2NzkwOTcwMDAuNzg2ODg3LCJleHAiOjQ4MzQ3NzA2MDAuNzgyNSwic3ViIjoiNjc2OCIsInNjb3BlcyI6WyJlbWFpbF9mdWxsIiwiZG9tYWluc19mdWxsIiwiYWN0aXZpdHlfZnVsbCIsImFuYWx5dGljc19mdWxsIiwidG9rZW5zX2Z1bGwiLCJ3ZWJob29rc19mdWxsIiwidGVtcGxhdGVzX2Z1bGwiLCJzdXBwcmVzc2lvbnNfZnVsbCIsInNtc19mdWxsIiwiZW1haWxfdmVyaWZpY2F0aW9uX2Z1bGwiLCJpbmJvdW5kc19mdWxsIiwicmVjaXBpZW50c19mdWxsIiwic2VuZGVyX2lkZW50aXR5X2Z1bGwiXX0.NMGNnZ4734ccy0Cv1HaK3_WJBirzC9aLgBK73C6Y4fyNfCG399JNO9jrDcYo2aWvdVKDyjFzAt_4PC0JznhzXbiADoymY-gDIWYWii8IuS2qycGB9tukRuamNJ0fbvMpUw0ilixklYrLVxG0MrydN6XOzURreEkqETsd8RjkSJseMtbiIzqsBl7CuUf1cnuOX-HAhpDT70KJmv9HoQI1U5XaAhQB_nARHcSZ903siOIvnkh0Wa5zjJUIu5y-8hX0ZC-Guo9LxZoi9WzhAQfrNQd6DKjDPqnBAMmO9bw8AWQ2R-FblUDl68J012pZcwTcafeT-XaeNyK4yYxhjuoFl05mS9cgHAEd8V6CGbmX2ajonnT38uFsiJfZ_6BPjz_HZuUxHhbdfPw6dpGSrs3BonVjsCQ00IKEygQsP8KYjZ8HsWPo5Tb5NHMqoraN5eXZJUYslmut-J7j7Y-2tDhDJYb9F7dN7MnXbRkl11m3W7skIJZnCz8sulYo3Xf3UtKlgt76_Fk5e6fbKivhgXAtARQqB5043VAAYKqVTIBWG6IljH9xmHg7EoeW7gn_j2ynz7ol-w0IoOh9YpYBhKpslnjv0L-LrILc0v6zGeGnR0lmKbW9Ff4FUo_H7pVubilVsNovKCPDKNtfr7wHTlrBzQjChoCIvDsWaKuxD2CxxL4'
      });
      
      const sentFrom = new Sender(parsed.email, parsed.name);
      
      const recipients = [
        new Recipient("bosnjak.matej@outlook.com", "Matej-Website-S")
      ];
      
      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject(parsed.subject)
        .setText(parsed.message);
      
        try {
          const send = await mailerSend.email.send(emailParams);
          console.log(send)
          return new Response(JSON.stringify(send), {
            headers: {
              'content-type': 'application/json;charset=utf-8',
            }
          });
        } catch (error) {
          console.log(error)
        }
    }

    const response = new Response(JSON.stringify({body: undefined}));
    return response;
	},
};
