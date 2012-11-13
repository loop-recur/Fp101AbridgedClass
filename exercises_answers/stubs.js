Views = {}

ajax = {
  get: function(path, cb){ cb(['comment1', 'comment2']) }.autoCurry()
}

db = {
  find: function(path, cb){ cb(['post1', 'post2']) }
}

Views.Post = {
  index: id,
  show: id
}

Page = {
  render: function(content, cb){ cb(); }
}

Twitter = {
  getTweets: function(username, cb) { cb(['tweet1', 'tweet2']); }
}

File = {
  write: function(filename, content, cb){ cb('file'); }
}

Http = { upload: function(){ } }

$ = function(str, attrs) {
  if(attrs) return "<tr>"+attrs.text+"</tr>";
  return {
    append: function(xs) {
      return "<table>"+ join("", xs)+ "</table>";
    }
  }
}