function domainName(url){
  
    myUrl = url.split('.')
 
if (myUrl.some((x)=>x.includes('www'))) {
  let domain = url.split('.')
  
  return domain[1]

}else if(myUrl.some((x)=>x.includes('//'))){ 

  let domain = url.split('/')
  domain = domain[2].split('.')
  return domain[0]
  
}else { 
   let domain = url.split('.')
   return domain[0]
}
}

domainName("http://github.com/carbonfive/raygun")
domainName("http://www.zombie-bites.com")
domainName("kxofzsyh-8.name/warez/")

//Best Solution

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

//regex 
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}