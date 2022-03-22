const char MAIN_page[] PROGMEM = R"=====(
<!DOCTYPE html>
<HTML>
  <HEAD>
    <TITLE>My first web page</TITLE>
    <link rel="stylesheet" href="https://lucasser.github.io/wifi-files/spyder.css"></link>
    <!--<script src="spyder.js"></script>-->
    <script src="https://lucasser.github.io/wifi-files/spyder.js"></script>
  </HEAD>
  <BODY>
    <CENTER>
      <B style="font-size: 50px; color: rgb(23, 16, 46);"> Evospider Control Room </B>
    </CENTER>
    <div id = "tabs">
      <table id="mode">
        <tbody>
          <tr>
            <td></td>
            <td class="border"></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td id="prog" class="tab" onclick="select(prog)">Program</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td id="drive" class="tab sel" onclick="select(drive)">Drive</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td id="wifi" class="tab" onclick="select(wifi)">Wifi Config</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td class="border"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id = "drivePage" class = "control">
      <!--<button onclick="arrowkeys()">Press to use arrows</button>-->
        <label for="command">Command</label>
        <input type="text" id="command"/>
        <button id="send" onclick="ajax()">Send</button>
    </div>
    <div id = "progPage" class = "control" style = "display:none">    
    </div>
  </BODY>
</HTML>
)=====";
