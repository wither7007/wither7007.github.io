import json
import requests
import sys
import re
import clipboard
def em(en):
    struct=""
    for index, item in enumerate(en):    
        print(index, item)
        struct+=f"{index} {item} \n"
    clipboard.copy(struct)
api="AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
def phone(number):
    pPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), number)
    print(number)
    
def getList(dict):
    return dict.keys()
def getMaps(place):
    mapPlus=place.replace(" ", "+")
    query= f"https://maps.googleapis.com/maps/api/place/textsearch/json?query={mapPlus}&location=Minnesota&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
    place=requests.get(query)
    placeJ=place.json()
    return(getPlaceStuff(placeJ['results'][0]['place_id']))
def getPlaceStuff(placeId):
    targ= f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cuser_ratings_total%2Crating%2Caddress_components%2Creviews%2Curl%2Cplace_id%2Cformatted_address%2Cformatted_phone_number&place_id={placeId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
    final=requests.get(targ)
    finalJ=final.json()
    return(finalJ)
fileJ=r"C:\projects\wither7007.github.io\streets\data.json"


with open(fileJ, 'r') as f:
    array = json.load(f)
n=getMaps(array[0][0])    
for p in array:
    searchP=p[0].replace(" ", "+")
    print(f"{p[0]} \t {searchP}")
with open("myfile.json", 'w', encoding='utf-8') as f: 
    for key, value in n.items(): 
        f.write('%s:%s\n' % (key, value))
print(n['result'])
o=n['result']
k=o['website']
p=getList(o)
for state in o.keys():
   print(state)
sys.exit()
'''
address_components
formatted_address
formatted_phone_number
name
place_id
rating
reviews
url
user_ratings_total
website
'''
no="address_components formatted_address formatted_phone_number name place_id rating reviews url user_ratings_total"
for k in no.split():
    print(f"o['{k}']")



print(array[3][0])
# print (array)
target=array[3][0].replace(" ","+")
query= f"https://maps.googleapis.com/maps/api/place/textsearch/json?query={target}&location=Minnesota&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
place=requests.get(query)
placeJ=place.json()
pId=placeJ['results'][0]['place_id']



targ= f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cuser_ratings_total%2Crating%2Caddress_components%2Creviews%2Curl%2Cplace_id%2Cformatted_address%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
print(targ)
final=requests.get(targ)
finalJ=final.json()
object = json.dumps(finalJ, indent = 4)
with open("review", "w", encoding="utf-8") as f:
    f.write(str(object))
sys.exit()




rev= f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Crating%2Creviews%2Cformatted_address%2Cformatted_phone_number&place_id=ChIJq1Kip_41s1IRRaD2qN-Vfo0&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"

x=requests.get(rev)
# print(f"ht is \n {ht}\n")
info=x.json()
infoResult=info['result']
# print(infoResult)
with open("review", "w", encoding="utf-8") as f:
    f.write(str(infoResult))

'''
array
0 Joyce Uptown Food Shelf, Inc. 
1 3041 Fremont Avenue South, Minneapolis MN 55408 
2 Phone: 612-825-4431 
3 Hours: Monday-Friday 1 pm-3:45 pm; and Thursday 1 pm- 3:45 pm and 5-6:45 pm. 
4 Service Area: Primarily for persons who live south of 25th St., north of 62nd St., west of I-35W, and east of France Ave. Remarks: Will provide assistance once a month (twice in an emergency). 
5 fs 
6  
7  
8 fs 
9 3 
10  
11 no address 
12  
13  
14  
15 www.sample.com 
'''


# Driver program
# query=f"https://maps.googleapis.com/maps/api/place/textsearch/xml?query=mission+lodge&location=Minnesota&key={api}"
# query=f"https://maps.googleapis.com/maps/api/place/textsearch/xml?query=mission+lodge&location=Minnesota&key={api}"
# print(f"************************\n{query}")
# rPhone="612-873-6963"
# # rPhone=sys.argv[1]
# xPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), rPhone)
# URL =f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B1{xPhone}&inputtype=phonenumber&key={api}"
# print(f"Url is \n {URL}")
# # pId='ChIJuyu80pkys1IRyLYXST81oDI'
# # print(f"phone is: {rPhone} \n url is: \n {URL} \n\n xPhone is: {xPhone}\n")
# r=requests.get(URL)
# # print(r.json())
# s=r.json()
# pId=s['candidates'][0]['place_id']
# print('\n\n')
# print(pId)
# ht=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"