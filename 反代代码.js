addEventListener(
  "fetch",event => {
     let url=new URL(event.request.url);
     url.hostname="反代域名";
     url.protocol='https'; 
     let request=new Request(url,event.request);
     event. respondWith(
       fetch(request)
     )
  }
)
