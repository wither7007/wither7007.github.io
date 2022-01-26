import json
import requests
import sys
import re
import clipboard
api="AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
def phone(number):
    pPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), number)
    print(number)
    
query=f"https://maps.googleapis.com/maps/api/place/textsearch/xml?query=mission+lodge&location=Minnesota&key={api}"
print(query)
# sys.exit()
rPhone="612-873-6963"
# rPhone=sys.argv[1]
xPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), rPhone)
URL =f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B1{xPhone}&inputtype=phonenumber&key={api}"
print(f"Url is \n {URL}")
# pId='ChIJuyu80pkys1IRyLYXST81oDI'
# print(f"phone is: {rPhone} \n url is: \n {URL} \n\n xPhone is: {xPhone}\n")
r=requests.get(URL)
# print(r.json())
s=r.json()
pId=s['candidates'][0]['place_id']
print('\n\n')
print(pId)
ht=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"

rev= f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Crating%2Creviews%2Cformatted_address%2Cformatted_phone_number&place_id=ChIJq1Kip_41s1IRRaD2qN-Vfo0&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"

x=requests.get(rev)
print(f"ht is \n {ht}\n")
info=x.json()
infoResult=info['result']
# print(infoResult)
with open("review", "w", encoding="utf-8") as f:
    f.write(str(infoResult))

# print(f"\n\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx{info['result']['name']}\n")
# # info['result']['name']
# # info['result']['website']


# print(f"\n Locale: \n {info}\n")
# print(xPhone)
# print(URL)