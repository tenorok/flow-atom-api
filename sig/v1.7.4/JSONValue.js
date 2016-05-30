// @flow

/* eslint-disable no-use-before-define */
type JSONValue =
  | boolean
  | JSONArray
  | JSONObject
  | null
  | number
  | string
/* eslint-enable no-use-before-define */

type JSONArray =
  | Array<JSONValue>

type JSONObject = {
  [key: string]: JSONValue,
}
