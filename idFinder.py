import json
import requests
import sys
import re
import clipboard

rPhone="763.559.4249"
xPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), rPhone)
api="AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
URL =f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B1{xPhone}&inputtype=phonenumber&key={api}"

print(xPhone)