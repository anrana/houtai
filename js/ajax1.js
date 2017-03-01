
$(document).ready(function() 
	{
        $.ajax({
            type: "get",
            dataType: "json",
            url: "http://112.74.88.212/qunadiao_001//bg/GetFishPlaces",
//          data:"fpid":"-1",
            
//          data:
//            {
//                selects: $("#selects").val(),
//                values: $("#values").val()
//            },
            success: function (json) {
//                $('#tb1 tr:gt(0)').remove();//删除之前的数据
                var s = '';
                for (var i = 0; i < json.length; i++) 
					s += '<tr><td>' + json[i].fpid + '</td><td>' + json[i].name+ '</td><td>' + json[i].type + '</td>'
                    +'<td>' + json[i].contact+  '</td></tr>';
                $('#TR1').append(s);
            },
            error: function (XMLResponse) {
                alert(" 错误信息：" + XMLResponse.responseText);
            }
        });
                
                
            
            
        });
		