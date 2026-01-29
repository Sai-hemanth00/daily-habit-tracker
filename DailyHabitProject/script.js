    const habitList = document.getElementById('habit-list');
    const input = document.getElementById('habit-input');

    function addHabit(){
      const text = input.value.trim();
      if(text === '') return;

      const tr = document.createElement('tr');

      tr.innerHTML = `
        <td class="habit-name">${text}</td>
        <td><input type="checkbox" class="checkbox" onclick="toggleStreak(this)"></td>
        <td class="streak">0</td>
        <td><button class="delete-btn" onclick="deleteHabit(this)">X</button></td>
      `;

      habitList.appendChild(tr);
      input.value = '';
    }

    function toggleStreak(checkbox){
      const row = checkbox.closest('tr');
      const streakCell = row.querySelector('.streak');
      let streak = parseInt(streakCell.innerText);

      if(checkbox.checked){
        streak++;
      }else{
        streak = Math.max(0, streak-1);
      }
      streakCell.innerText = streak;
    }

    function deleteHabit(btn){
      const row = btn.closest('tr');
      row.remove();
    }