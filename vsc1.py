import json
import requests
file=open(r"C:\projects\wither7007.github.io\streets\data.json")
# for a in file:
#     print(a)
dataf = json.load(file)
k=0
str=""
for i in range(0,5):
    print(f"\n********** {i}  *************\n")
    print(dataf[i][0])
    word=(dataf[i][0].replace(" ","%"))
    search=f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%{word}&inputtype=textquery&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
    print(search)
    r = requests.get(search)
print(data)
print(data['candidates'][0])
pId=data['candidates'][0]['place_id']
pUrl=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"


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
pId="ChIJiXJHreUn9ocRcX6PvU8T1i8"
pUrl=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
data = r.json()
print(data)
print(data['candidates'][0])
pId=data['candidates'][0]['place_id']
pUrl=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"