! function() {
    var captchaseconds = 0;
    var millisSince1Jan1970 = "";
    var newTime = "";

    function showIRCTCClock() {
        $("#topnav").find("a").each(function() {
            if ($(this).text().indexOf("IST") > 0) {
                var anchorHoldingTime = $(this).text().trim();
                var anchorHoldingTimeFormat = anchorHoldingTime.replace(/\[|\]|IST/g, '').replace(/-/g, ' ');
                var IRCTCtime = new Date(anchorHoldingTimeFormat);
                millisSince1Jan1970 = IRCTCtime.getTime();
                setInterval(function() {
                    millisSince1Jan1970 += 1000;
                    newTime = new Date(millisSince1Jan1970).toLocaleTimeString();
                    if (newTime == "11:00:00 AM") {
                        alert('11:00:00 AM');
                    } else if (newTime == "10:00:00 AM") {
                        alert('10:00:00 AM');
                    }
                    $("#topnav li:first a").text(newTime);
                }, 1000);
            }
        });
    }
    var title = document.title;
    if (title != 'IRCTC Next Generation eTicketing System' && title != 'Saurav') {
        showIRCTCClock();
    }
    chrome.storage.sync.get("psgnInfo", function(items) {
        if (!chrome.runtime.error) {
            console.log(items);
            var psgnInfo4 = JSON.parse(items.psgnInfo);
            var totalNo = psgnInfo4['totalNo'];
            if (title != 'Saurav' && title != 'E-Ticketing') {
                var sm = document.forms['addPassengerForm'];
                if (totalNo == 1) {
                    if (document.getElementsByClassName('input-style1 psgn-name')[0]) {
                        document.getElementsByClassName('input-style1 psgn-name')[0].value = psgnInfo4['psgnName:0'];
                    }
                    if (sm['addPassengerForm:psdetail:0:psgnName']) sm['addPassengerForm:psdetail:0:psgnName'].value = psgnInfo4['psgnName:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnAge']) sm['addPassengerForm:psdetail:0:psgnAge'].value = psgnInfo4['psgnAge:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnGender']) sm['addPassengerForm:psdetail:0:psgnGender'].value = psgnInfo4['psgnGender:0'];
                    if (sm['addPassengerForm:psdetail:0:berthChoice']) sm['addPassengerForm:psdetail:0:berthChoice'].value = psgnInfo4['berthChoice:0'];
                    if (sm['addPassengerForm:psdetail:0:foodChoice']) sm['addPassengerForm:psdetail:0:foodChoice'].value = psgnInfo4['psgnAge:0'];
                } else if (totalNo == 2) {
                    document.getElementsByClassName('input-style1 psgn-name')[0].value = psgnInfo4['psgnName:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnName']) sm['addPassengerForm:psdetail:0:psgnName'].value = psgnInfo4['psgnName:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnAge']) sm['addPassengerForm:psdetail:0:psgnAge'].value = psgnInfo4['psgnAge:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnGender']) sm['addPassengerForm:psdetail:0:psgnGender'].value = psgnInfo4['psgnGender:0'];
                    if (sm['addPassengerForm:psdetail:0:berthChoice']) sm['addPassengerForm:psdetail:0:berthChoice'].value = psgnInfo4['berthChoice:0'];
                    if (sm['addPassengerForm:psdetail:0:foodChoice']) sm['addPassengerForm:psdetail:0:foodChoice'].value = psgnInfo4['psgnAge:0'];
                    document.getElementsByClassName('input-style1 psgn-name')[1].value = psgnInfo4['psgnName:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnName']) sm['addPassengerForm:psdetail:1:psgnName'].value = psgnInfo4['psgnName:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnAge']) sm['addPassengerForm:psdetail:1:psgnAge'].value = psgnInfo4['psgnAge:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnGender']) sm['addPassengerForm:psdetail:1:psgnGender'].value = psgnInfo4['psgnGender:1'];
                    if (sm['addPassengerForm:psdetail:1:berthChoice']) sm['addPassengerForm:psdetail:1:berthChoice'].value = psgnInfo4['berthChoice:1'];
                    if (sm['addPassengerForm:psdetail:1:foodChoice']) sm['addPassengerForm:psdetail:1:foodChoice'].value = psgnInfo4['psgnAge:1'];
                } else if (totalNo == 3) {
                    document.getElementsByClassName('input-style1 psgn-name')[0].value = psgnInfo4['psgnName:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnName']) sm['addPassengerForm:psdetail:0:psgnName'].value = psgnInfo4['psgnName:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnAge']) sm['addPassengerForm:psdetail:0:psgnAge'].value = psgnInfo4['psgnAge:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnGender']) sm['addPassengerForm:psdetail:0:psgnGender'].value = psgnInfo4['psgnGender:0'];
                    if (sm['addPassengerForm:psdetail:0:berthChoice']) sm['addPassengerForm:psdetail:0:berthChoice'].value = psgnInfo4['berthChoice:0'];
                    if (sm['addPassengerForm:psdetail:0:foodChoice']) sm['addPassengerForm:psdetail:0:foodChoice'].value = psgnInfo4['psgnAge:0'];
                    document.getElementsByClassName('input-style1 psgn-name')[1].value = psgnInfo4['psgnName:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnName']) sm['addPassengerForm:psdetail:1:psgnName'].value = psgnInfo4['psgnName:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnAge']) sm['addPassengerForm:psdetail:1:psgnAge'].value = psgnInfo4['psgnAge:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnGender']) sm['addPassengerForm:psdetail:1:psgnGender'].value = psgnInfo4['psgnGender:1'];
                    if (sm['addPassengerForm:psdetail:1:berthChoice']) sm['addPassengerForm:psdetail:1:berthChoice'].value = psgnInfo4['berthChoice:1'];
                    if (sm['addPassengerForm:psdetail:1:foodChoice']) sm['addPassengerForm:psdetail:1:foodChoice'].value = psgnInfo4['psgnAge:1'];
                    document.getElementsByClassName('input-style1 psgn-name')[2].value = psgnInfo4['psgnName:2'];
                    if (sm['addPassengerForm:psdetail:2:psgnName']) sm['addPassengerForm:psdetail:2:psgnName'].value = psgnInfo4['psgnName:2'];
                    if (sm['addPassengerForm:psdetail:2:psgnAge']) sm['addPassengerForm:psdetail:2:psgnAge'].value = psgnInfo4['psgnAge:2'];
                    if (sm['addPassengerForm:psdetail:2:psgnGender']) sm['addPassengerForm:psdetail:2:psgnGender'].value = psgnInfo4['psgnGender:2'];
                    if (sm['addPassengerForm:psdetail:2:berthChoice']) sm['addPassengerForm:psdetail:2:berthChoice'].value = psgnInfo4['berthChoice:2'];
                    if (sm['addPassengerForm:psdetail:2:foodChoice']) sm['addPassengerForm:psdetail:2:foodChoice'].value = psgnInfo4['psgnAge:2'];
                } else {
                    document.getElementsByClassName('input-style1 psgn-name')[0].value = psgnInfo4['psgnName:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnName']) sm['addPassengerForm:psdetail:0:psgnName'].value = psgnInfo4['psgnName:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnAge']) sm['addPassengerForm:psdetail:0:psgnAge'].value = psgnInfo4['psgnAge:0'];
                    if (sm['addPassengerForm:psdetail:0:psgnGender']) sm['addPassengerForm:psdetail:0:psgnGender'].value = psgnInfo4['psgnGender:0'];
                    if (sm['addPassengerForm:psdetail:0:berthChoice']) sm['addPassengerForm:psdetail:0:berthChoice'].value = psgnInfo4['berthChoice:0'];
                    if (sm['addPassengerForm:psdetail:0:foodChoice']) sm['addPassengerForm:psdetail:0:foodChoice'].value = psgnInfo4['psgnAge:0'];
                    document.getElementsByClassName('input-style1 psgn-name')[1].value = psgnInfo4['psgnName:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnName']) sm['addPassengerForm:psdetail:1:psgnName'].value = psgnInfo4['psgnName:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnAge']) sm['addPassengerForm:psdetail:1:psgnAge'].value = psgnInfo4['psgnAge:1'];
                    if (sm['addPassengerForm:psdetail:1:psgnGender']) sm['addPassengerForm:psdetail:1:psgnGender'].value = psgnInfo4['psgnGender:1'];
                    if (sm['addPassengerForm:psdetail:1:berthChoice']) sm['addPassengerForm:psdetail:1:berthChoice'].value = psgnInfo4['berthChoice:1'];
                    if (sm['addPassengerForm:psdetail:1:foodChoice']) sm['addPassengerForm:psdetail:1:foodChoice'].value = psgnInfo4['psgnAge:1'];
                    document.getElementsByClassName('input-style1 psgn-name')[2].value = psgnInfo4['psgnName:2'];
                    if (sm['addPassengerForm:psdetail:2:psgnName']) sm['addPassengerForm:psdetail:2:psgnName'].value = psgnInfo4['psgnName:2'];
                    if (sm['addPassengerForm:psdetail:2:psgnAge']) sm['addPassengerForm:psdetail:2:psgnAge'].value = psgnInfo4['psgnAge:2'];
                    if (sm['addPassengerForm:psdetail:2:psgnGender']) sm['addPassengerForm:psdetail:2:psgnGender'].value = psgnInfo4['psgnGender:2'];
                    if (sm['addPassengerForm:psdetail:2:berthChoice']) sm['addPassengerForm:psdetail:2:berthChoice'].value = psgnInfo4['berthChoice:2'];
                    if (sm['addPassengerForm:psdetail:2:foodChoice']) sm['addPassengerForm:psdetail:2:foodChoice'].value = psgnInfo4['psgnAge:2'];
                    document.getElementsByClassName('input-style1 psgn-name')[3].value = psgnInfo4['psgnName:3'];
                    if (sm['addPassengerForm:psdetail:3:psgnName']) sm['addPassengerForm:psdetail:3:psgnName'].value = psgnInfo4['psgnName:3'];
                    if (sm['addPassengerForm:psdetail:3:psgnAge']) sm['addPassengerForm:psdetail:3:psgnAge'].value = psgnInfo4['psgnAge:3'];
                    if (sm['addPassengerForm:psdetail:3:psgnGender']) sm['addPassengerForm:psdetail:3:psgnGender'].value = psgnInfo4['psgnGender:3'];
                    if (sm['addPassengerForm:psdetail:3:berthChoice']) sm['addPassengerForm:psdetail:3:berthChoice'].value = psgnInfo4['berthChoice:3'];
                    if (sm['addPassengerForm:psdetail:3:foodChoice']) sm['addPassengerForm:psdetail:3:foodChoice'].value = psgnInfo4['psgnAge:3'];
                }
                if (sm['addPassengerForm:mobileNo']) sm['addPassengerForm:mobileNo'].value = psgnInfo4['mobileNo'];
                if (sm['addPassengerForm:autoUpgrade']) sm['addPassengerForm:autoUpgrade'].checked = 'true';
                if (document.getElementById("j_captcha")) {
                    document.getElementById("j_captcha").focus();
                }
            }
        }
    });
}();
if (document.getElementById("submit")) {
    document.getElementById("submit").onclick = function() {
        var psgnInfo = {
            "psgnName:0": document.getElementById('addPassengerForm:psdetail:0:psgnName').value,
            "psgnAge:0": document.getElementById('addPassengerForm:psdetail:0:psgnAge').value,
            "psgnGender:0": document.getElementById('addPassengerForm:psdetail:0:psgnGender').value,
            "berthChoice:0": document.getElementById('addPassengerForm:psdetail:0:berthChoice').value,
            "foodChoice:0": document.getElementById('addPassengerForm:psdetail:0:foodChoice').value,
            "mobileNo": document.getElementById('addPassengerForm:mobileNo').value,
            "psgnName:1": document.getElementById('addPassengerForm:psdetail:1:psgnName').value,
            "psgnAge:1": document.getElementById('addPassengerForm:psdetail:1:psgnAge').value,
            "psgnGender:1": document.getElementById('addPassengerForm:psdetail:1:psgnGender').value,
            "berthChoice:1": document.getElementById('addPassengerForm:psdetail:1:berthChoice').value,
            "foodChoice:1": document.getElementById('addPassengerForm:psdetail:1:foodChoice').value,
            "psgnName:2": document.getElementById('addPassengerForm:psdetail:2:psgnName').value,
            "psgnAge:2": document.getElementById('addPassengerForm:psdetail:2:psgnAge').value,
            "psgnGender:2": document.getElementById('addPassengerForm:psdetail:2:psgnGender').value,
            "berthChoice:2": document.getElementById('addPassengerForm:psdetail:2:berthChoice').value,
            "foodChoice:2": document.getElementById('addPassengerForm:psdetail:2:foodChoice').value,
            "psgnName:3": document.getElementById('addPassengerForm:psdetail:3:psgnName').value,
            "psgnAge:3": document.getElementById('addPassengerForm:psdetail:3:psgnAge').value,
            "psgnGender:3": document.getElementById('addPassengerForm:psdetail:3:psgnGender').value,
            "berthChoice:3": document.getElementById('addPassengerForm:psdetail:3:berthChoice').value,
            "foodChoice:3": document.getElementById('addPassengerForm:psdetail:3:foodChoice').value
        }
        if (psgnInfo["psgnName:1"] == "") {
            psgnInfo.totalNo = 1;
        } else if (psgnInfo["psgnName:2"] == "") {
            psgnInfo.totalNo = 2;
        } else if (psgnInfo["psgnName:3"] == "") {
            psgnInfo.totalNo = 3;
        } else {
            psgnInfo.totalNo = 4;
        }
        var psgnInfo1 = JSON.stringify(psgnInfo);
        chrome.runtime.connect().postMessage(psgnInfo1);
        alert("done");
        document.getElementById("reset").click();
    }
}