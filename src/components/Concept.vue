<template>
    <div class="wrapper">
      <section id="GettingStarted"></section>
      <hr><br><br>
      <div class="container">
        <h1>Getting started</h1>
        <br>

        <p >This simulation is, at least currently, all about playing around with digital twins.
          Try concepts as ownership, ownership-transfer, and verify it via the Tangle explorer.
          All states and references are stored on the Tangle.
        </p>
        <br>
        <h3>1. Create your first Asset</h3>
        <p>
          This is a small tool showing a way of how to implement a supply-chain on IOTAs Tangle. It serves as a
          tracker of digital twins, which for each only one owner at a time exists.

          First you need to do the work of the creator - on the top bar select "Supplier".
          To create an asset give it the name of your desire in the "Create Twin" command box.

          When you click on the button, a digital twin is posted on the Tangle. The fresh twin is now shown in the dashboard.
          Click on it in order to select it and use it in further steps.
        </p>
        <br>
        <h3>2. Alter the Assets State</h3>
        <p>The owner is the only one who can attach further data or transfer the asset.
          You can try this out by using the "Attach Measurement" interface.
          This will create a new transaction, linked to the predecessor and authenticated.
          There are many ways to implement it at this level, but either way, it is a cryptographically
          secured stream. This property is a building block for features like audits.</p>
        <hr>
          Notice: In order to be really safe and control who is able to see which data, the implementation of another
          IOTA MAM mode is necessary.
        <br>
        <br>

        <br>
        <h3>3. Verify it</h3>
        <p>Your twin has just completed his first steps - at least that's what I am showing you.
          But you don't trust no single authority - do you? Check out the committed states of a selected asset by
          using the "Tangle Explorer" button. All that's left to do is, give it a look!
          Since it is not obvious neither in the simulator nor in the explorer:

          Each state is stored on a different address. All private addresses of such a stream is created, via a
          merkle tree.
        </p>

        <br>
        <h3>4. Get that asset</h3>
        <p>Your asset is ready for transfer. You need to get an offer in order to close the deal.

          Now is the time to switch the roles and be the one who implements this recently created asset.
          On the top bar, click again and select "Producer". You should still see all existing assets in your dashboard.
          Click on the root address in order to copy it to you clipboard.
          Paste it into the "Create Transfer Request" area. This process has to be confirmed by the owner in order to
          complete the transfer.
        </p>
        <hr>
        Notice: As in real life, you need to know that something exists before you can interact with it.
        The minimum information provided in order to fit a whole company into similar onTangle structures would, require
        only one address which needs to be verified!
        <br>
        <br>

        <br>

        <h3>5. Transfer Ownership</h3>
        <p>Switch into the "Supplier" role again and close the deal. Identify the request document and if you confirm,
          copy the root of it and paste it into the "Approve Transfer" field. The moment you hit that button, there is no
          way of retrieving it, if done in direct way.

          This could be mitigated by implementing smart contracts securing the interaction.
        </p>


        <hr>

      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

  .wrapper {
    height: 40%;
    width: 100%;
  }
  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15pt;
  }


  .subtext {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12pt;

  }

</style>
