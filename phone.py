import json
import requests
import sys
import re
import clipboard
api="AIzaSyCksSrPzSDpTmgJ-FaTT4_Xg6lHb9YtZJw"
# Python program to demonstrate
# command line arguments
import sys
def phone(number):
    pPhone=re.sub(r'(?<=^\+).*|^[^+].*', lambda m: re.sub(r'\D', '', m.group()), number)
    # print(pPhone)
    print(f" the converted number is {pPhone}")
    return(pPhone)
# phone('aasdf2234')    
iPhone=sys.argv[1]
# print(xPhone)
# phone(iPhone)
xPhone=phone(iPhone)
print(xPhone)
URL =f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=%2B1{xPhone}&inputtype=phonenumber&key={api}"
print("\n" )
print(URL)