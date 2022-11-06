# url-extractor
A simple script to extract urls from a string using ~~a totally working~~ regex

# Example
```ts
main("Did you know that this text contains multiple links like google.com, youtube.co some.random.url as well but it should theoretically filter google because .co is a valid tld!").then((res) => console.log(res));
```

```
[ 'https://google.co', 'https://youtube.co' ]
```
