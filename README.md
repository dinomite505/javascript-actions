# 'Hello World' JavaScript Action

This action prints "Hello from JavaScript Action" or "Hello" and the name of a person to greet to the log.
---

## Inputs

### `who-to-greet`

**REQUIRED** The name of the person to greet. Default is `"World"`.

## Outputs

### `time`

This is the time we greeted you.

## Example Usage

```yaml
uses: actions/hello-world-javascript-action@34287feC853vk537728g
with: 
  who-to-greet: 'Dino the Greatest'
```
