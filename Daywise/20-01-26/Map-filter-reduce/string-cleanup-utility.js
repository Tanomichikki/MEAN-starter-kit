const sentences = [" Hello!! ", " JS@@ is## cool ", "  Clean$$ text  "];

sentences
  .map(s => s.trim().replace(/[^a-zA-Z0-9 ]/g, ""))
  .forEach(s => console.log(s));
