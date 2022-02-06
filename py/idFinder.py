import json
import requests
import sys
import re
import clipboard
from collections import Counter
outputFile="dataX"

spreadTab="st"
def em(en):
    struct=""
    for index, item in enumerate(en):    
        print(index, item)
        struct+=f"{index} {item} \n"
    clipboard.copy(struct)
api="AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
def phone(number):
    pPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), number)
    # print(number)    
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
fileJ=f"C:\projects\wither7007.github.io\streets\{outputFile}.json"

#
with open(fileJ, 'r') as f:
    array = json.load(f)
name2=[]
# sheetsUrl="https://sheets.googleapis.com/v4/spreadsheets/1v0WTX_g0SEHb-EfG9faV3ayFo1WZUmUj8Lhgc2Kw2cA/values/json?alt=json&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw" 
# s=requests.get(sheetsUrl)
# final=s.json()
for which in range(len(array)):
# for which in range(23,24):
    try:
        n=getMaps(array[which][0])    
        # for p in array:
        #     searchP=p[0].replace(" ", "+")
        #     # print(f"{p[0]} \t {searchP}")
        o=n['result']
        o.pop('reviews')
        o.pop('address_components')
        k=o['website']
        # p=getList(o)
        # for state in o.keys():
        #    print(state)
        print(f"which is: {which} \n n is: {o}")
        name=[]
        name.append(o['name'])
        name.append(o['formatted_address'])
        name.append(o['formatted_phone_number'])
        name.append(array[which][3])
        name.append(array[which][4])
        name.append(array[which][5])
        name.append(o['rating'])
        name.append('')
        name.append(array[which][5])
        name.append('0')
        name.append('')
        name.append(o['formatted_address'])
        name.append('')
        name.append('')
        name.append('')
        #//todo change for https
        # name.append(re.sub('https://','',o['website']))
        name.append(o['website'])
        name2.append(name)
    except Exception as e:
        print(f"Which is {which}")
        # print(f"o['name' is {o['name']}")
        # print("an error")
        print (f"my error is: {e}")
        print("----------------------------\n\n")

# print(json.dumps(name))
yk=json.dumps(name2,indent=4)
file2 = open(f"C:\projects\wither7007.github.io\streets\{outputFile}.json","w+")
file2.write(str(yk))
file2.close()