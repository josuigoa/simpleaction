# Action for [ideckia](https://ideckia.github.io/): simpleaction

## Description

Demo of a simple Ideckia action

## Properties

| Name | Type | Description | Shared | Default | Possible values |
| ----- |----- | ----- | ----- | ----- | ----- |
| name | String | A name shown in the window | false | "ideckia action" | [] |

## On single click

TODO

## On long press

TODO

## Test the action

There is a script called `test_action.js` to test the new action. Set the `props` variable in the script with the properties you want and run this command:

```
node test_action.js
```

## Example in layout file

```json
{
    "text": "simpleaction example",
    "bgColor": "00ff00",
    "actions": [
        {
            "name": "simpleaction",
            "props": {
                "name": "possible"
            }
        }
    ]
}
```
