//append file
var fs=require('fs');
fs.appendFile('index.html','hello',function(err){
 if (err) throw err;
 console.log('saved');
});
//open file
 var fs=require('fs');
 fs.open('index.html','w',function(err,file){
     if(err) throw err;
     console.log('saved successfuly');
 });
 //write file
 var fs=require('fs');
 fs.writeFile('index.html','modifications',function(err){
     if (err) throw err;
     console.log('write');
 })
 //update files is nothing but append nd write file
 //if we want to delete files we should use unlink('index.html',function(err){})
 //if we want to renaming the file to index.html to app.html
 
