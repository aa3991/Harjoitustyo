<script>
  let bgImage = './images/background.jpg';
  export let otsikko;
  import Header from './Header.svelte';
  import News from './News.svelte';
  import Button from './Button.svelte';
  import Info from './Info.svelte';

  // Ability Score
  import AbilityScore from './AbilityScore.svelte';

  // Skills
  import Skill from './Skill.svelte';

  import Footer from './Footer.svelte';

  // Level
  let characterLevel = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];
  let chosenCharacterlevel = characterLevel[0];

  // Proficiency bonus
  $: proficiencyBonus = Math.ceil(chosenCharacterlevel / 4 + 1);

  // Info
  let infoVisible = false;

  // Info näkyviin
  const infoVisibility = () => {
    infoVisible = !infoVisible;
  };

  // Sulje Info ikkunasta
  const closeInfo = () => {
    infoVisible = false;
  };

  // Skills
  let chosenSkills = '';
</script>

<div style="background-image: url('{bgImage}')">
  <!--Yläkulmassa vaihtuvat uutiset-->
  <News />

  <div id="header">
    <Header {otsikko} />
  </div>

  <!--Info ikkunan avaaminen-->
  <Button on:click={infoVisibility}>INFO</Button>
  {#if infoVisible}
    <div><Info on:close={closeInfo} /></div>
  {/if}

  <main>
    <!-- Tämä osio määrittelee hahmon tason mukaan määräytyvän Proficiency bonuksen-->
    <div id="lvlprofcontainer">
      <h3 id="lvlprofcontainerheader">Character level & Proficiency bonus</h3>
      <div id="lvl">
        Character level:
        <select bind:value={chosenCharacterlevel}>
          {#each characterLevel as levelsInarray}
            <option value={levelsInarray}>{levelsInarray}</option>
          {/each}
        </select>
        Proficiency bonus: {proficiencyBonus}
      </div>
    </div>

    <div id="abilityscorecontainer">
      <h3>Ability Scores</h3>
      <AbilityScore id="str" label="Strength" />
      <AbilityScore id="dex" label="Dexterity" />
      <AbilityScore id="con" label="Constitution" />
      <AbilityScore id="int" label="Intelligence" />
      <AbilityScore id="wis" label="Wisdom" />
      <AbilityScore id="cha" label="Charisma" />
    </div>

    <!--Hahmon taidot-->
    <div id="skillcontainer">
      <Skill />
    </div>
  </main>

  <Footer />
</div>

<style>
  #abilityscorecontainer {
    padding: 1em;
    max-width: 60%;
    margin: auto;
    background-color: rgb(82, 99, 122);
    color: white;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
  }
  #skillcontainer {
    padding: 1em;
  }
  main {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    width: 100%;
    margin: 0;

    margin-bottom: 2em;
  }

  :global(body) {
    padding: 0;
    margin: 0;
  }

  #lvlprofcontainer {
    width: 25%;
    text-align: center;
    padding: 1em;
    background-color: rgb(82, 99, 122);
    color: white;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 1em;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
