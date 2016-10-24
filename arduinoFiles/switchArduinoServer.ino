#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <Servo.h>
Servo myServo;
const char* ssid = "********";
const char* password = "********";
const int SERVO_PIN = 16;
ESP8266WebServer server(80);
const int piezoHigh = 0;
const int piezoLow = 1023;
const int led = 13;

void handleRoot() {
  digitalWrite(led, 1);
  server.send(200, "text/plain", "hello from esp8266!");
  digitalWrite(led, 0);
}

void handleNotFound(){
  digitalWrite(led, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET)?"GET":"POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i=0; i<server.args(); i++){
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  digitalWrite(led, 0);
}

void setup(void){
  pinMode(SERVO_PIN, OUTPUT); 
  pinMode(led, OUTPUT);
  digitalWrite(led, 0);
  Serial.begin(115200);
  WiFi.begin(ssid, password);
 
  myServo.attach(SERVO_PIN);
  myServo.write(0);
  delay(500);
  myServo.detach();
  pinMode(LED_BUILTIN, OUTPUT);  
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp8266")) {
    Serial.println("MDNS responder started");
  }

  server.on("/", handleRoot);

  server.on("/inline", [](){
    server.send(200, "text/plain", "this works as well");
  });

  server.on("/on", [](){
    if (server.argName(0) == "apiKey" && server.arg(0) == "***") {
    myServo.attach(SERVO_PIN);
    myServo.write(90);
    server.send(200, "text/plain", "OK: on");
    delay(500);
    myServo.detach();
    } else {
    server.send(404, "text/plain", "Error: on");
    }
    
  });

  server.on("/off", [](){
    if (server.argName(0) == "apiKey" && server.arg(0) == "***") {
    myServo.attach(SERVO_PIN);
    myServo.write(0);
    server.send(200, "text/plain", "OK: off");
    delay(500);
    myServo.detach();
    } else {
    server.send(404, "text/plain", "Error: off");
    }
  });

  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
}

void loop(void){
  server.handleClient();
}
