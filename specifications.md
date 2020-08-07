# Supply Chain Specifications



## Core

 ### ChannelTypes
 A) **Asset**
    Representation of real world assets (Physical Assets, Documents, Contracts, ...)

 B) **Disposition** [Private / Public] [ Asset/Template Stream / Disposition List / Communication List]
    Organisation of multiple channels (Production, Quality Control, Procurement, Selling, Templates, Internal Structures, ...)

 C) **Communication** [Restricted / Public] [Decision Proposal / Decision, ...]
    Private or public stream of messages (Negotiation, Announcements, ...)

Template -> a base object inherited by specified new assets, CRUD Methods
Private -> structure encrypted processes and organizational groups, resource and decision flow based on data
Restricted -> messenging with sidekey owned by two or more parties,
Public -> structure processes and expand to other com expose additional services / APIs

### Methods

*General*

- create<ChannelType> ()

- attach

*Asset*

- create
- create_from_template (template_id)
    link new created asset from template
- request_asset (root)
- attach
    add data / measurements to asset
- integrate
    bind multiple owned assets to a single one
- transfer_request
    request ownership of an asset
- transfer
    transfer ownership of an asset



## Client

Asset [Local Twin / Twin Listener]

Local Twin -> twin is currently not owned, just represe ntation
Twin Listener -> twin is not owned, Channel with listener controller.

