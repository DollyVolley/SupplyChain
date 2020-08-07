export function Asset(asset_id, name, root, owner) {
  return {
    id: asset_id,
    state: null,
    root: root,
    pending: false,
    terminated: false,
    prev_root: null,
    data: {
      name: name,
      owner: owner,
      data_points: [],
      prev_owner: null,
      create_date: new Date().toISOString().split('T')[0]
    }
  }
}


