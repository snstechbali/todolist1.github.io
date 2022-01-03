const input = document.querySelector('input');
		const btn = document.querySelector('.addTask > button');

		btn.addEventListener('click', addList);
		input.addEventListener('keyup', (e)=>{
			(e.keyCode === 13 ? addList(e) : null);
		})

		function addList(e){
			const notCompleted = document.querySelector('.notCompleted');
			const Completed = document.querySelector('.Completed');

			const newLi = document.createElement('li');
			const checkBtn = document.createElement('button');
			const delBtn = document.createElement('button');

			checkBtn.innerHTML = '<i class="fa fa-check"></i>';
			delBtn.innerHTML = '<i class="fa fa-trash"></i>';


			if(input.value !==''){
				newLi.textContent = input.value;
				input.value = '';
				notCompleted.appendChild(newLi);
				newLi.appendChild(checkBtn);
				newLi.appendChild(delBtn);
			}

			checkBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
				Completed.appendChild(parent);
				checkBtn.style.display = 'none';
			});

			delBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
			});
		}

		/*-------- date ------*/
		function updateClock(){
			var now = new Date();
			var dname = now.getDay(),
			mo = now.getMonth(),
			dnum = now.getDate(),
			yr = now.getFullYear(),
			hou = now.getHours(),
			min = now.getMinutes(),
			sec = now.getSeconds(),
			pe = "AM";

			if(hou == 0){
				hou = hou - 12;
				pe = "PM";
			}
			Number.prototype.pad = function(digits){
				for(var n = this.toString(); n.length < digits; n = 0 + n);
				return n; 
			}

			var month = ["January", "February", "March", "April", "May", "June", "July","Augest", "September", "October", "November", "December"];
			var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
			var values = [week[dname], month[mo], dnum.pad(2), yr, hou.pad(2), min, sec.pad(2), pe];
			for(var i = 0; i < ids.length; i++)
			document.getElementById(ids[i]).firstChild.nodeValue = values[i];
			
		}
		function initClock(){
			updateClock();
			window.setInterval("updateClock()", 1);
		}