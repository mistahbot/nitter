.json - JavaScript Object Notation


curl -v http://localhost:8080/messages_json \
    -X POST \
   -H 'Content-Type: application/json' \
   -d '{"writtenBy":"andrew"}'



curl http://localhost:8080/messages_json \
    -X POST \
   -H 'Content-Type: application/json' \
   -d '{"writtenBy":"andrew"}' | json_pp



echo '[{"id":"0.766864904122154","writtenAt":1650203975787,"text":"hello #1","writtenBy":"andrew","writtenFrom":"terminal"}]' | json_pp

