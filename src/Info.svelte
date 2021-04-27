<script>
  import Modal from './Modal.svelte';
  import Button from './Button.svelte';

  // luodaan yksilöyty button -toiminto createEventDispatcherillä
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function closeInfo() {
    dispatch('close');
  }
</script>

<Modal>
  <h1 slot="header">Info</h1>

  <div>
    <p>
      Ability score defines your ability modifier. The bigger score the bigger
      modifier.
    </p>
    <p>
      Proficiency bonus increases when you gain levels. Proficiency describes
      your characters advancement.
    </p>

    <p>
      <Button id="close" on:click={closeInfo}>CLOSE</Button>
    </p>
  </div>
</Modal>
