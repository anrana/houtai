$(document).ready(function() 
	{
        $.ajax({
            type: "get",
            dataType: "json",
            url: "http://112.74.88.212/qunadiao_001//bg/GetAllUser",
//          data:
//            {
//                selects: $("#selects").val(),
//                values: $("#values").val()
//            },
            success: function (json) {
//                $('#tb1 tr:gt(0)').remove();//删除之前的数据
                var s = '';
                for (var i = 0; i < json.length; i++) 
					s += '<tr><td>' + json[i].uid + '</td><td>' + json[i].nick+ '</td><td>' + json[i].reg_time + '</td>'
                    +'<td>' + json[i].phone+  '</td></tr>';
                $('#TR').append(s);
            },
            error: function (XMLResponse) {
                alert(" 错误信息：" + XMLResponse.responseText);
            }
        });
                
                
            
            
        });


		
		


