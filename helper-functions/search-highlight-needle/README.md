# Search & highligt search-term

search for needle in a text and highlight the occurrences. Lower or UpperCase is ignored.

###Attributes

Attribute | Type | Description
------------- | ------------- | -------------
text | string | whole text where the needle needs to be found
needle | string | search term
wrapStart | string | string that will appear before all needle occurrences
wrapEnd | string | string that will appear after all needle occurrences

###Example
```javascript
highlightSearchTerm("real asdfasf real asdfsafd REAL asfd Realreal", 'real', '<em>', '</em>');
// => <em>real</em> asdfasf <em>real</em> asdfsafd <em>REAL</em> asfd <em>Real</em><em>real</em>
```