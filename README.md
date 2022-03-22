To use this code:
Upload ESP code and index.h to your esp8266 module.
In your arduino code include
"#include <SoftwareSerial.h>
SoftwareSerial ESPserial(3, 2); // RX | TX
String input;
void setup() {
   ESPserial.begin(115200);   
}

void loop() {
   // listen for communication from the ESP8266 and then write it to the serial monitor
   if (ESPserial.available()) {
      input = ESPserial.readString()
   }
}"
and connect your esp to the numbers spesified in ESPSerial. rx to tx, tx to rx.
The input from the website will be located in the variable input in the format {cmd:<your input>}
That's it.
