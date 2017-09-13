# FreeCodeCamp API: Image Search Abstraction Layer
## User stories:
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example query usage:
```text
https://huyjoonimage-search.herokuapp.com/api/imagesearch/cutedog?offset=10
https://huyjoonimage-search.herokuapp.com/api/recentsearchs
```

## Example query output:

```js
[
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=c06n0zkvd327GeNCjIFanTqU1XYHBIBdebffcISKNbA&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3d326E0014132AD2738919AE81A48C9C66F4513AB3%26simid%3d608041017205786424&p=DevEx,5007.1",
snippet: "Cute Dog Cute dog!, isnt it cute?",
thumbnail: "https://tse4.mm.bing.net/th?id=OIP.i1QGoozRSuNLcdQKNyFshAEgDY&pid=Api",
context: "galleryhip.com/cute-dog.html"
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=BeQwEO-ZYWqo_ghWrDCKK_l3gZSFmiF72QXqP87HQhE&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3dF76B256B05C6CBEB617A1588918E8638AE08379D%26simid%3d608034046473864833&p=DevEx,5013.1",
snippet: "38 Cute Dog Pictures - InspirationSeek.com",
thumbnail: "https://tse1.mm.bing.net/th?id=OIP.RZit-f8kmjDv27MWUOguJwEsC7&pid=Api",
context: "inspirationseek.com/38-cute-dog-pictures"
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=c8CwxwVPGqXHhOZrl1iqQnFdqFevEpalCGIh69Sj2BI&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3d912838C944BA90457B794DA17E55159164A1B911%26simid%3d608027475186419864&p=DevEx,5019.1",
snippet: "Cute and Adorable Puppy Pictures | Cuteness Overflow",
thumbnail: "https://tse2.mm.bing.net/th?id=OIP.hU3YlVUVxAgDOyTbfyptGgEsDh&pid=Api",
context: "www.cutenessoverflow.com/cute-and-adorable-puppy-pictures"
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=e0MzopoEzZQpyMm_I7mzknvuJPr1hCDRL_cQuowJpqM&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3dCE79BA0F4D11A9E439961E2F368437CC193F5797%26simid%3d607997968754214104&p=DevEx,5025.1",
snippet: "Cute Puppy Photos : My10Online",
thumbnail: "https://tse3.mm.bing.net/th?id=OIP.3GcA-awo9OglG8omvJvVYwEsDh&pid=Api",
context: "my10online.com/2011/10/cute-puppy-photos"
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=vBGrQt8AQ0gq3WcsnXNbdnmzDQLf-DgkWzW32IE2CO4&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3d22A5D54B4BB702E3618FF6AD6007907226823707%26simid%3d608007464928676977&p=DevEx,5031.1",
snippet: "Puppies images Cute Puppies :) HD wallpaper and background ...",
thumbnail: "https://tse2.mm.bing.net/th?id=OIP.92wIxwnq8FIO9oOg0KaF-QEsC7&pid=Api",
context: "www.fanpop.com/clubs/puppies/images/22040882/title/cute-puppies..."
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=SWFS7DvxGkZu_GOGbh97QJSG3nq979tiCIHLdnCC3I8&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3d41B93AAA93B24B45503227566333C5AEE39F54E1%26simid%3d607999102632922937&p=DevEx,5037.1",
snippet: "Cute Dog Wallpapers - Wallpaper Cave",
thumbnail: "https://tse1.mm.bing.net/th?id=OIP.QPdZbd2tvV-JYcPbO3wOkAERDk&pid=Api",
context: "wallpapercave.com/cute-dog-wallpaper"
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=K-39yYvBVK_ivehKeduRplolRtCdBgALiMgo0lnYbjM&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3d6A17C6E6638D8FB7E1AABAD4122790DB6525F846%26simid%3d608015127153869026&p=DevEx,5043.1",
snippet: "WallpaperfreekS: HD Cute Dogs Wallpapers 1600X1200",
thumbnail: "https://tse1.mm.bing.net/th?id=OIP.zzx-0ZWfWD_h-XjtdQ0eRgEsDh&pid=Api",
context: "wallpaperfreeks.blogspot.com/2012/02/hd-cute-dogs-wallpapers..."
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=sMPDw6Oq9ACe80weJugl4_n8XM6wegAOXjNSm5Q6yFU&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3dB7F2318E99B4828AAE1CA3EC8191C3AE3FDD1543%26simid%3d608045140374520161&p=DevEx,5049.1",
snippet: "most 10 cute baby dog pictures - the best",
thumbnail: "https://tse2.mm.bing.net/th?id=OIP.l9L2JI8wE_8R4N56haH_PQDhEs&pid=Api",
context: "10-best.blogspot.com/2013/03/most-10-cute-baby-dog-pictures.html"
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=CA2rp9OeTWJRITdag47VmfMWzwBm70Etw0wdv_Jmb0U&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3dD010D32221DB2FD056FB553DA909FA6B22F6D704%26simid%3d607989615046099735&p=DevEx,5055.1",
snippet: "Cute Puppy - Puppies Wallpaper (15813305) - Fanpop",
thumbnail: "https://tse2.mm.bing.net/th?id=OIP.8VvvD9BFFt0D0qfnhjC8YgEsDh&pid=Api",
context: "www.fanpop.com/clubs/puppies/images/15813305/title/cute-puppy..."
},
{
url: "https://www.bing.com/cr?IG=2BCA188A59FC4E4BACBE6CFA4C9D5DA5&CID=056B4B22C16B684404CD41DEC06D692E&rd=1&h=WdYbJtEoIgMLnqxbSlLM3-yqbdBiPFpvnvRP-kYua5o&v=1&r=https%3a%2f%2fwww.bing.com%2fimages%2fsearch%3fview%3ddetailv2%26FORM%3dOIIRPO%26q%3dcutedog%26id%3d7B5318B0F3D58158CA2812A5636FF2C8FF5030E2%26simid%3d608000477010724469&p=DevEx,5061.1",
snippet: "Cute Dog :) - Dogs Wallpaper (33531409) - Fanpop",
thumbnail: "https://tse4.mm.bing.net/th?id=OIP.s70ZdmSxu8aaRNtsgtTTKwEsC7&pid=Api",
context: "www.fanpop.com/clubs/dogs/images/33531409/title/cute-dog-wallpaper"
}
]
```
## Example latest output:

```js
[
{
_id: "59b8b3332f15034b5c18219b",
updatedAt: "2017-09-13T04:25:23.289Z",
createdAt: "2017-09-13T04:25:23.289Z",
searchVal: "mouse",
searchDate: "2017-09-13T04:25:23.276Z",
__v: 0
},
{
_id: "59b8b370a02e9f81b807df52",
updatedAt: "2017-09-13T04:26:24.105Z",
createdAt: "2017-09-13T04:26:24.105Z",
searchVal: "cat",
searchDate: "2017-09-13T04:26:24.091Z",
__v: 0
},
{
_id: "59b8b41cffb0655c408d3346",
updatedAt: "2017-09-13T04:29:16.231Z",
createdAt: "2017-09-13T04:29:16.231Z",
searchVal: "cena",
searchDate: "2017-09-13T04:29:16.219Z",
__v: 0
},
{
_id: "59b8b8e4ffb0655c408d3347",
updatedAt: "2017-09-13T04:49:40.040Z",
createdAt: "2017-09-13T04:49:40.040Z",
searchVal: "supeman",
searchDate: "2017-09-13T04:49:40.037Z",
__v: 0
},
{
_id: "59b8be3754f7490004fd53db",
updatedAt: "2017-09-13T05:12:23.836Z",
createdAt: "2017-09-13T05:12:23.836Z",
searchVal: "cena",
searchDate: "2017-09-13T05:12:23.815Z",
__v: 0
},
{
_id: "59b8be57bbeada00040d8e09",
updatedAt: "2017-09-13T05:12:55.672Z",
createdAt: "2017-09-13T05:12:55.672Z",
searchVal: "cena",
searchDate: "2017-09-13T05:12:55.654Z",
__v: 0
},
{
_id: "59b8c1d2bbeada00040d8e0a",
updatedAt: "2017-09-13T05:27:46.190Z",
createdAt: "2017-09-13T05:27:46.190Z",
searchVal: "cutedog",
searchDate: "2017-09-13T05:27:46.171Z",
__v: 0
}
]
```
