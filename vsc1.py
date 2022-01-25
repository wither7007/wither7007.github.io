import json
import requests
import sys
import re
import clipboard
file=open(r"C:\projects\wither7007.github.io\streets\data.json")
# for a in file:
#     print(a)
dataf = json.load(file)
k=0
str=""
for i in range(0,13):
    print(f"\n********** {i}  *************\n")
    print(dataf[i][0])
    word=(dataf[i][0])
    word = re.sub(r"[/?]", " ", word)
    word = re.sub(r"\s+", "%", word)
    word = re.sub(r"Cent", "ent", word)
    search=f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%{word}&inputtype=textquery&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
    # print(search)
    str+=search+"\n\n"
    print(f"Search is: {search}\n")
    r = requests.get(search)
    data = r.json()
    pId=data['candidates'][0]['place_id']
    # sys.exit()
    ht=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
    print(f"\n\n{ht}")
    s=requests.get(ht)
    final=s.json()
    print("=======================================================")
    print(final)
sys.exit()
ht="https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"

pUrl=f"https://maps.googleapis.com/maps/api/place/details/json?fields=%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
print(data)

data = r.json()
# print(data)
print(data['candidates'][0])


    # for a in data[i]:
    #     print(data[i][0])
    #     str+="\n"
    # k=0
# print(str)
print('done')
# for i in range(0,5):
#     print(f"\n********** {i}  *************\n")
#     for a in data[i]:
#         print(f"{k} {a}")
#         k+=1
#         str+=f"{k} {a}"
#         str+="\n"
#     k=0
struct=""
for index, item in enumerate(dataf[1]):    
  print(index, item)
  struct+=f"{index} {item} \n"
clipboard.copy(struct)

pId="ChIJiXJHreUn9ocRcX6PvU8T1i8"
pUrl=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
data = r.json()
print(data)
print(data['candidates'][0])
pId=data['candidates'][0]['place_id']
pUrl=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"