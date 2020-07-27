<template>
    <div class="wrapper">
      <section id="GettingStarted"></section>
      <hr><br><br>
      <div class="container">
        <h1 class="title">Getting started</h1>
        <br>
        <p id="notice">Notice: All of this is in a early stage. Second Layer of operations will follow soon!</p>

        <p >This simulation is, at least currently, all about playing around with digital twins.
          Try concepts as ownership, ownership-transfer, and verify it via the Tangle explorer.
          All states and references are stored on the Tangle.
        </p>
        <br>
        <h3 class="subheader" id="CreateFirstAssetHelp">1. Create your first Asset</h3>
        <p>First you need to do the work of the creator - on the top bar select "Supplier".
          To create an asset give it the name of your desire in the "Create Twin" command box.

          When you click on the button, a digital twin is posted on the Tangle. It marks the start of the channel,
          which will from now on track the state of the asset. The fresh twin is now shown in the dashboard.
        </p>
        <hr>
        Notice: The channel for this twin is public. <a href="https://dollyvolley.com/#privacy_faq">What are modes?</a>
        <br>
        <br>

        <br>
        <h3 class="subheader" id="AttachMeasurementHelp">2. Alter the Assets State</h3>
        <p>The owner is the only one who can attach further data or transfer the asset.
          You can try this out by using the "Attach Measurement" operation. Click on an asset to select it
          and enter the metric or data you want to attach.

          This will create a new transaction, linked to the previous state.
          There are many ways to implement the logic at this level, but either way, it is a cryptographically
          secured stream.</p>

        <br>
        <h3 class="subheader" id="verify">3. Verify it</h3>
        <p>Your twin has just completed his first steps - at least that's what I am showing you.
          But you don't trust no single authority, do you? Check out the committed states of a selected asset by
          using the "Tangle Explorer" button.
          Since it is not obvious neither in the simulator nor in the explorer:

          Notice that each state is stored on a different address on the Tangle, as this might not be obvious from
          this example. Look for MAM here <a href="https://dollyvolley.com/#learn-more">Learn More</a>.
        </p>

        <br>
        <h3 class="subheader" id="RequestAssetHelp">4. Get that asset</h3>
        <p>Your asset is ready for transfer. But first you need to get an offer prior to closing the deal.
          Now is the time to switch roles and represent the receiving end of this transfer, to initiate the transfer!
        </p>
        <p>
          On the menu bar select "Producer". You should still see all existing assets in your dashboard.
          We know the origin of the transfer, your previously created object, now we need a target.
          For this you need to create a new object. You can give it any name you like.

        <p>
        This object is now your
        receiver/target object. This object needs to stay clear (no attached measurements), otherwise
        it would not be able to mirror the original anymore. If you own the seed, you own the MAM channel, you own the asset.
        </p>
        <p>
          Select your receiver twin and click on the root address of the original, which is the subject of transfer.
          Paste it into the "Create Transfer Request" area. In the dashboard, your asset is now yellow and frozen.

          This process has to be confirmed by the owner in order to complete the transfer.
        </p>
        <hr>
        Notice: As in real life, you need to know that something exists before you can interact with it.
        In this case it would be the root of the original asset, as well as the root of the target asset.
        With further on-Tangle structures, you would just need the root of a company, to check out all of its assets!
        <br>
        <br>

        <br>
        <h3 class="subheader" id="TransferAssetHelp">5. Transfer Ownership</h3>
        <p>Switch into the "Supplier" role again and close the deal. Identify the request asset (pending) and
          copy the root of it and paste it into the "Approve Transfer" field. Select the asset you want to transfer.
          The moment you hit that button, there is no way of retrieving it.
          This could be mitigated by implementing smart contracts securing the interaction between both parties.
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

  #notice {
    color: #cd0000;
    font-size: 20pt;
  }

  .wrapper {
    height: 40%;
    width: 100%;
  }
  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15pt;
  }
.title{
  color:#345695;
}

  .subtext {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12pt;

  }

</style>
