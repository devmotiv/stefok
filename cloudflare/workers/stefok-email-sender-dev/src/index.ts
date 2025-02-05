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
  MAILJET_API_KEY: string;
  MAILJET_SECRET_KEY: string;
  SENDER_EMAIL: string;
}

type JsonValue = string | number | boolean | null | JsonObject | JsonArray | FormData;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];
const apiUrl = 'https://api.mailjet.com/v3.1/send';

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
      const parsed = customParse(values) as FormData;
      const createMessageText = () => {
        const parsedMessage = parsed.message.replace(/\\n/g, '<br>')
        const message = 
        `${parsedMessage}
          \n
          \n
          Moji kontakt podaci:
          \n
          Email: ${parsed.email} \n
          Broj telefona/mobitela: ${parsed.phone}
        `.replaceAll('\n', '</br>');
        return parsedMessage + message;
      }
        
        try {
          createMessageText();
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ${btoa(`${env.MAILJET_API_KEY}:${env.MAILJET_SECRET_KEY}`)}`,
              'User-Agent': 'Cloudflare Workers'
            },
            body: JSON.stringify({
              Messages: [
                {
                  From: { Email: env.SENDER_EMAIL },
                  To: [{ Email: 'bosnjak.matej@outlook.com' }],
                  Subject: parsed.subject,
                  TextPart: createMessageText(),
                  HTMLPart: `${createMessageText()}`,
                },
              ],
            }),
          });
   
          const data = await response.json();
          console.log(data);
          return new Response(JSON.stringify({body: data}), {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
          });

        } catch (error) {
          console.log(error)
        }
    }

    const response = new Response(JSON.stringify({body: undefined}), {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
    return response;
	},
};
