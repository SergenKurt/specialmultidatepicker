var dt_opts = {
    weekday: 'short',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
};




$("#date1").focus(function() {
    showDatePicker();
});


$("#date2").focus(function() {
    showDatePicker();
});

$("button#select_date").click(function() {
	$type = $(this).attr('data-type');
	$add = new Array();
	
	switch($type) {
	
		case 'weeks' : 
			$add = new Array();
			_start = moment().subtract(1, 'weeks').startOf('isoWeek').format();
			_end = moment().subtract(1, 'weeks').endOf('isoWeek').format()
			st_date = new Date(_start);
			 en_date = new Date(_end);
			 temp_date = new Date(_start);
			console.log(st_date + " ||| " + en_date);
			while(temp_date <= en_date) {
				console.log(temp_date);
				$add.push(new Date(temp_date));
				temp_date.setDate(temp_date.getDate() + 1);
			}
			
			break;
			
			case '4_weeks' : 
			$add = new Array();
			_start = moment().subtract(4, 'weeks').startOf('isoWeek').format();
			_end = moment().subtract(1, 'weeks').endOf('isoWeek').format()
			st_date = new Date(_start);
			en_date = new Date(_end);
			temp_date = new Date(_start);
			console.log(st_date + " ||| " + en_date);
			while(temp_date <= en_date) {
				console.log(temp_date);
				$add.push(new Date(temp_date));
				temp_date.setDate(temp_date.getDate() + 1);
			}
			
			break;
			
			case '12_weeks' : 
			$add = new Array();
			_start = moment().subtract(12, 'weeks').startOf('isoWeek').format();
			_end = moment().subtract(1, 'weeks').endOf('isoWeek').format()
			st_date = new Date(_start);
			en_date = new Date(_end);
			temp_date = new Date(_start);
			console.log(st_date + " ||| " + en_date);
			while(temp_date <= en_date) {
				console.log(temp_date);
				$add.push(new Date(temp_date));
				temp_date.setDate(temp_date.getDate() + 1);
			}
			
			break;
			
			case '24_weeks' : 
			$add = new Array();
			_start = moment().subtract(24, 'weeks').startOf('isoWeek').format();
			_end = moment().subtract(1, 'weeks').endOf('isoWeek').format()
			st_date = new Date(_start);
			en_date = new Date(_end);
			temp_date = new Date(_start);
			console.log(st_date + " ||| " + en_date);
			while(temp_date <= en_date) {
				console.log(temp_date);
				$add.push(new Date(temp_date));
				temp_date.setDate(temp_date.getDate() + 1);
			}
			
			break;
			
			case '52_weeks' : 
			$add = new Array();
			_start = moment().subtract(52, 'weeks').startOf('isoWeek').format();
			_end = moment().subtract(1, 'weeks').endOf('isoWeek').format()
			st_date = new Date(_start);
			en_date = new Date(_end);
			temp_date = new Date(_start);
			console.log(st_date + " ||| " + en_date);
			while(temp_date <= en_date) {
				console.log(temp_date);
				$add.push(new Date(temp_date));
				temp_date.setDate(temp_date.getDate() + 1);
			}
			
			break;
			
			case 'year' : 
			$add = new Array();
			_start = moment().subtract(1, 'years').startOf('isoWeek').format();
			
			st_date = new Date(_start);
			en_date = new Date();
			temp_date = new Date(_start);
			console.log(st_date + " ||| " + en_date);
			while(temp_date <= en_date) {
				console.log(temp_date);
				$add.push(new Date(temp_date));
				temp_date.setDate(temp_date.getDate() + 1);
			}

			break;
			
			case 'alltime' : 
			$add = new Array();
			st_date = new Date("2000-01-01 00:00:00");
			en_date = new Date();
			temp_date = new Date(st_date);
			
			while(temp_date <= en_date) {
				
				$add.push(new Date(temp_date));
				temp_date.setDate(temp_date.getDate() + 1);
			}
			
			break;
	}
	$add = $add.sort((a,b) => a - b);
	$("#date1").val($add[0].toLocaleString('tr-TR', {day:'numeric', month:'numeric', year:'numeric'}));
				$("#date2").val($add[$add.length -1].toLocaleString('tr-TR', {day:'numeric', month:'numeric', year:'numeric'}));
				$("#msg").html($add[0].toLocaleString('tr-TR', dt_opts) + " <b>ile</b> " + $add[$add.length -1].toLocaleString('tr-TR', dt_opts) + " arası");
	$('#simple-select-days-range').multiDatesPicker('resetDates', 'picked');
    $('#simple-select-days-range').multiDatesPicker('addDates', $add);
	
})
let days = new Array();
function isExists(start) {
	for(let i = 0; i < days.length; i++) {
		
		if(days[i].toString() == start.toString()) return i;
	}
	return -1;
}
function showDatePicker() {

	 
    $('#simple-select-days-range').show();
    $('#simple-select-days-range').multiDatesPicker({
        autoselectRange: false,
        pickableRange: 7,
        firstDay: 1,
        mode: 'daysRange',
        onSelect: function(dateText, inst) {
            let start = $(this).datepicker('getDate');
            
            let index = start.getDay();
            if(index == 0) index = 7;
            start.setDate(start.getDate() - (index - 1));
			
            let end = new Date(start);
            end.setDate(start.getDate() + 6);
            
           
            date = new Date(start);
            console.log("Start : " + date);
			let check = isExists(date);
			if(check >= 0) {
				days.splice(check, 7);
			} else {
			
				while (date <= end) {
					days.push(new Date(date));
					date.setDate(date.getDate() + 1);
				}
				
				
				
			}
            
            //$(this).multiDatesPicker('resetDates', 'picked');
			if(days.length > 0) {
				days = days.sort((a,b) => a - b);
				console.log(days);
				$("#date1").val(days[0].toLocaleString('tr-TR', {day:'numeric', month:'numeric', year:'numeric'}));
				$("#date2").val(days[days.length - 1].toLocaleString('tr-TR', {day:'numeric', month:'numeric', year:'numeric'}));
				$("#msg").html(days[0].toLocaleString('tr-TR', dt_opts) + " <b>ile</b> " + days[days.length - 1].toLocaleString('tr-TR', dt_opts) + " arası");
				$(this).multiDatesPicker('addDates', days);
			}
            //Aşağıdaki $(this).hide(); satırını kaldırırsanız tarih seçildiği zaman gizlenmeyecektir.
			//$(this).hide();
        },

    });
}

	
