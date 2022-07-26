
		const form = document.querySelector("#new-task-form");
		const input = document.querySelector("#new-task-input");
		const list_el = document.querySelector("#tasks");
	window.addEventListener('load', () => {


		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const task = input.value;
			if (task == "") {
				Swal.fire(
					'task vide !!!',
				)
			}else{

			const task_el = document.createElement('div');
			task_el.classList.add('task');

			const task_content_el = document.createElement('div');
			task_content_el.classList.add('content');

			task_el.appendChild(task_content_el);

			const task_input_el = document.createElement('input');
			task_input_el.classList.add('text');
			task_input_el.type = 'text';
			task_input_el.value = task;
		
	/*  saved data in local storage*/
			let keyss= Math.floor(Math.random() * 100);
			localStorage.setItem(keyss,task_input_el.value);
		


			task_input_el.setAttribute('readonly', 'readonly');

			task_content_el.appendChild(task_input_el);

			const task_actions_el = document.createElement('div');
			task_actions_el.classList.add('actions');
			
			const task_edit_el = document.createElement('button');
			task_edit_el.classList.add('edit');
			task_edit_el.innerText = 'Edit';
		
			const task_delete_el = document.createElement('button');
			task_delete_el.classList.add('delete');
			task_delete_el.innerText = 'Delete';

		/** date of save the task */
		const spano =document.createElement('span');
		var span_vl=new Date();
		spano.innerText = span_vl.getDate()+"/"+(span_vl.getMonth()+1)+"/"+span_vl.getFullYear();
		spano.style.color="white";
		spano.setAttribute('class','span');
		task_actions_el.appendChild(spano);
			/*-------------------*/
			task_actions_el.appendChild(task_edit_el);
			
			task_actions_el.appendChild(task_delete_el);
			
			task_el.appendChild(task_actions_el);

			list_el.appendChild(task_el);

			input.value = '';

			task_edit_el.addEventListener('click', (e) => {
				if (task_edit_el.innerText.toLowerCase() == "edit") {
					task_edit_el.innerText = "Save";
					task_input_el.removeAttribute("readonly");
					task_input_el.focus();
				} else {
					task_edit_el.innerText = "Edit";
					task_input_el.setAttribute("readonly", "readonly");
				}
			});

			task_delete_el.addEventListener('click', (e) => {
			
				list_el.removeChild(task_el);
			});
			task_input_el.addEventListener('dblclick', (e) => {
				Swal.fire(task_input_el.value)
			});
		}});
	});
	/* restore and edit data in local storage*/ 
	var items={...localStorage};
	function loca() {
		if (localStorage.length > 0) {
			for (const key in items) {			
			const task_el = document.createElement('div');
			task_el.classList.add('task');

			const task_content_el = document.createElement('div');
			task_content_el.classList.add('content');

			task_el.appendChild(task_content_el);

			const task_input_el = document.createElement('input');
			task_input_el.classList.add('text');
			task_input_el.type = 'text';
			task_input_el.value = ` ${items[key]}`;

			task_input_el.setAttribute('readonly', 'readonly');

			task_content_el.appendChild(task_input_el);

			const task_actions_el = document.createElement('div');
			task_actions_el.classList.add('actions');
			
			const task_edit_el = document.createElement('button');
			task_edit_el.classList.add('edit');
			task_edit_el.innerText = 'Edit';
		
			const task_delete_el = document.createElement('button');
			task_delete_el.classList.add('delete');
			task_delete_el.innerText = 'Delete';

			task_actions_el.appendChild(task_edit_el);
			
			task_actions_el.appendChild(task_delete_el);
			
			task_el.appendChild(task_actions_el);

			list_el.appendChild(task_el);

			function loko() {
				
			}


			task_edit_el.addEventListener('click', (e) => {
				if (task_edit_el.innerText.toLowerCase() == "edit") {
					task_edit_el.innerText = "Save";
					task_input_el.removeAttribute("readonly");
					task_input_el.focus();

				} else {
					task_edit_el.innerText = "Edit";
					task_input_el.setAttribute("readonly", "readonly");
					if ((items[key].value == task_el.value)) {
						
						localStorage.setItem(key,task_input_el.value);
					}

				}
			});

			task_delete_el.addEventListener('click', (e) => {
			
				list_el.removeChild(task_el);
				
					if (items[key].value == task_el.value) {
						localStorage.removeItem(key);
					}
			
			});
			task_input_el.addEventListener('dblclick', (e) => {
				Swal.fire(task_input_el.value)
			});
				
			}
		}
	}




	
