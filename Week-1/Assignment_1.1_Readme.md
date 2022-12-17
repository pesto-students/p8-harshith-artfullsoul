# Web Browser
A web browser is a software application that locates retrive and display content of World Wide Web.

# How Web Browser Works

Step 1 ->  URL entered is searched on DNS. <br>
Step 2 ->  DNS server sends back IP address. <br>
Step 3 ->  IP address is search on World Wide Web & request is sent to the server with ip to get data. <br>
Step 4 ->  Server sends back data in binary format. <br>
Step 5 ->  The response is processed and displayed in user interface by Browser. <br>
Step 6 ->  The browser process data in following parts. <br>
![alt text](https://github.com/pesto-students/p8-harshith-artfullsoul/blob/master/Week-1/browser.png?raw=true)


# Components of a Browser & their Working

## Network Layer 

* responsible for fetching data from the server.
* use http FTP protocol to receive data.
* received data can be in many formats like HTML,CSS,JSON,Pdf etc.

## Rendering Engine 

* the data sent from server is sent to the process by Rendering Engine.
* Rendering engine is responsible for painting the requested content on the browser we report based on the mime type of content
* works with the UI backend and JS Engine to process data
* Key parts consist of HTML Parser that work as follows.

## HTML Parser

* Creates document object model by HTML file
* Create CSS object model by CSS file 
* CSSOM + DOM is used to construct render tree that contains visible element of Html
* Layout Operation -> will calculate size and position of each element in render tree
* Paint operation -> will define size of each element in render tree.
* final output of paint operation will be sent to browser engine for display.

## Javascript Engine

* use to convert JavaScript code to machine code 
* output is send to rendering engine for further processing
* responsible for integrating and executing JavaScript code embeded in HTML document 
* each browser uses different Javascript Engines

## UI Backend 

* responsible for drawing basic widgets like combo boxes, windows etc 
* used by user interface of browser to draw forward and backward button, address bar etc
* also used by rendering engine to paint the server response 
* it uses operating system interface method and express generic interface that is not platfrom specific

## Browser Engine

* Each browser uses different Browser Engines
* It commands action between user interface and rendering engine 
* Query and manupilates Rendering engine based on input from User Interface.

## User Interface

* It is the frontend visual appearance of the browser 
* Contains forward,backward,reload,addressber,bookmark button 
* Along with the window displaying the requested webpage

## Data Persistance 
* to improve speed and performance data is stored locally 
* This is done using different Web Browsers API's ex-> Local Storage Session Storage Etc.