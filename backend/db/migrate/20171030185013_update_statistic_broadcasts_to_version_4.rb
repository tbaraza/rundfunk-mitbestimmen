class UpdateStatisticBroadcastsToVersion4 < ActiveRecord::Migration[5.0]
  def change
    replace_view :statistic_broadcasts, version: 4, revert_to_version: 3
  end
end
