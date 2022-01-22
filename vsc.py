# importing the requests library
import requests
import clipboard
import re

# api-endpoint
# URL = "https://maps.googleapis.com/maps/api/geocode/json"
student = {'name': 'John', 'age': 25, 'courses': ['Math', 'CompSci']}
for key, value in student.items():
    print(key, value)
rPhone="763.559.4249"
xPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), rPhone)

phone="7635594249"
api="AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"

URL =f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B1{xPhone}&inputtype=phonenumber&key={api}"
print(f"maps url is: {URL}")
# location given here
input="The Clothes ? Closet/CSJ Ministry Center"
input = re.sub(r"[/?]", " ", input)
input = re.sub(r"\s+", "%", input)
print(input)
pattern = re.compile('[/]')
s = re.sub(pattern, '', input)
s=s.replace(" ","%")
print(s)

print(s)    # WelcomeUser_12

# sending get request and saving the response as response object
r = requests.get(URL)

# extracting data in json format
word="Cornerstone+Ministry+Park+Ave.+United+Methodist+Church"
search=f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%{word}&inputtype=textquery&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
clipboard.copy(search)
pId="ChIJiXJHreUn9ocRcX6PvU8T1i8"
pUrl=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
clipboard.copy(pUrl)

data = r.json()
print(data)
print(data['candidates'][0])
pId=data['candidates'][0]['place_id']
pUrl=f"https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Cformatted_phone_number&place_id={pId}&key=AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
clipboard.copy(pUrl)
print(f"Place id is: {pUrl}")
# # extracting latitude, longitude and formatted address
# # of the first matching location
# latitude = data['results'][0]['geometry']['location']['lat']
# longitude = data['results'][0]['geometry']['location']['lng']
# formatted_address = data['results'][0]['formatted_address']

# # printing the output
# print("Latitude:%s\nLongitude:%s\nFormatted Address:%s"
# 	%(latitude, longitude,formatted_address))
