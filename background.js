// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//var DdData = [{"name":"ogrenci", "type":"select", "qcount":3}, {"name":"ders", "type":"radio", "qcount":11}, {"name":"ogretim", "type":"radio", "qcount":3}, {"name":"hoca", "type":"radio", "qcount":14}];

var actualCode = '(' + function() {
	function createRadioElement( name, checked, v ) {
		var radioInput;
		try {
			var radioHtml = '<input type="radio" name="' + name + '"';
			if ( checked ) {
				radioHtml += ' checked="checked"';
			}
			radioHtml +='value="' + v + '"'
			radioHtml += '/>';
			radioInput = document.createElement(radioHtml);
		} catch( err ) {
			console.log("Error");
			
			radioInput = document.createElement('input');
			radioInput.setAttribute('type', 'radio');
			radioInput.setAttribute('name', name);
			radioInput.setAttribute('value', v);
			if ( checked ) {
				radioInput.setAttribute('checked', 'checked');
			}
		}

		return radioInput;
}
	function btnClick(){
		var a = document.getElementsByName("rate");
		var selectedR;

		for(var i = 0; i < a.length; i++) {
		   if(a[i].checked)
			   selectedR = a[i].value;
		 }
		 console.log(selectedR+" "+a);
		for(var i=0;i<DdData.length;i++)
		{
			for(q=0;q<DdData[i].qcount;q++)
			{
				if(DdData[i].type == "radio")
				{
					console.log(DdData[i].type);
					$('SUR_'+DdData[i].name+'_'+q+'_'+selectedR).checked = true
				}
			}
		}
		// All code is executed in a local scope.
		// For example, the following does NOT overwrite the global `alert` method
		var alert = null;
		// To overwrite a global variable, prefix `window`:
		window.alert = "hll";
	}
	var btn = document.createElement("BUTTON");
	btn.onclick = btnClick;        // Create a <button> element
	var t = document.createTextNode("CLICK ME");       // Create a text node
	btn.appendChild(t); 
	var a = document.getElementsByTagName('th');
	for(var i=4;i>=0;i--)
		a[0].appendChild(createRadioElement("rate",false,i+1));
	a[0].appendChild(btn);
	
} + ')();';
var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.remove();


//document.write(a.length):
