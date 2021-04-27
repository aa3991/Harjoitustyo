<script>
  export let chosenSkills = '';
  export const skills = [
    { name: 'Acrobatics', score: 'dex' },
    { name: 'Animal Handling', score: 'wis' },
    { name: 'Arcana', score: 'int' },
    { name: 'Athletics', score: 'str' },
    { name: 'Deception', score: 'cha' },
    { name: 'History', score: 'int' },
    { name: 'Insight', score: 'wis' },
    { name: 'Intimidation', score: 'cha' },
    { name: 'Investigation', score: 'int' },
    { name: 'Medicine', score: 'wis' },
    { name: 'Nature', score: 'int' },
    { name: 'Perception', score: 'wis' },
    { name: 'Performance', score: 'cha' },
    { name: 'Persuasion', score: 'cha' },
    { name: 'Religion', score: 'int' },
    { name: 'Sleight of Hand', score: 'dex' },
    { name: 'Stealth', score: 'dex' },
    { name: 'Survival', score: 'wis' },
  ];
</script>

<div>
  <div id="Skillit">
    <h3>Skills</h3>
    {#each skills as skillsListed}
      <label for={skillsListed}>
        <input
          type="checkbox"
          bind:group={chosenSkills}
          name="Skills"
          value={skillsListed}
        />{skillsListed.name}
      </label> <br />
    {/each}
  </div>
</div>

<style>
  #Skillit {
    padding: 1em;
    width: 15%;
    border-radius: 5px;
    background-color: rgb(82, 99, 122);
    color: white;
    border-style: solid;
    border-width: 1px;
    margin: auto;
  }
</style>
