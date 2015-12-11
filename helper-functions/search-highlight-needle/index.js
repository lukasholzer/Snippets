/**
 * search for needle in text and highlight/wrap all occurrences
 */
function highlightSearchTerm(text, needle, wrapStart, wrapEnd) {
  var parts = text.toLowerCase().split(needle.toLowerCase());
  var position = 0;
  var currentLength = 0;
  var wrapLength = wrapStart.length + wrapEnd.length;
  
  parts.forEach(function(element, index) {
    if(parts.length === ++index) {
      return;
    }

    position = position + currentLength + element.length;
    
    var blockLength = position + needle.length;
    
    var block = text.substr(0, position);
    block += wrapStart + text.substr(position, needle.length) + wrapEnd;
    block += text.substr(blockLength, text.length - blockLength);
    text = block;
    
    position += wrapLength;
    currentLength = needle.length;
  });
  return text;
}

highlightSearchTerm("real asdfasf real asdfsafd REAL asfd Realreal", 'real', '<em>', '</em>');
// => <em>real</em> asdfasf <em>real</em> asdfsafd <em>REAL</em> asfd <em>Real</em><em>real</em>