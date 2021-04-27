<script>
  export let id;
  export let label;

  // Lähtöarvojen alustus
  let baseValue = 8;
  let racialValue = 0;

  // Modifierin määrittely
  $: basePlusracial = baseValue + racialValue;
  $: abilityModifier = ((basePlusracial - 10) / 2).toFixed(0);
  export let abilityModifier;

  // const exportModifier = () => dispatch({ id });
</script>

<div id="container">
  <div id="base">
    <label for={id}>{label}</label>
    <input type="number" {id} bind:value={baseValue} min="8" max="15" />
  </div>

  <div id="racial">
    <label for={id}>Racial bonus</label>
    <input type="number" {id} bind:value={racialValue} min="0" max="2" />
  </div>

  <div id="total">
    Total: <b>{baseValue + racialValue}</b>
  </div>
  <div id="modifier">
    Modifier: <b>{abilityModifier}</b>
  </div>
</div>

<style>
  #container {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1em;
    color: white;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    display: grid;
    background-color: rgb(82, 99, 122);
  }
  #base {
    grid-column-start: 1;
    grid-row-start: 1;
  }

  #racial {
    grid-column-start: 2;
    grid-row-start: 1;
  }
  #total {
    grid-column-start: 3;
    grid-row-start: 1;
  }
  #modifier {
    grid-column-start: 4;
    grid-row-start: 1;
  }

  #base,
  #racial,
  #total,
  #modifier {
    font-size: 1.1em;
    margin-top: 1em;
    margin-bottom: 1em;
    text-align: center;
  }

  input {
    width: 50px;
  }

  label {
    width: 100px;
    float: left;
  }

  input,
  label {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
</style>
