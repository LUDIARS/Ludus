---
type: "Ludus Game Genre"
title: "ランナー／エンドレスラン"
description: "自動的に進む移動と即時の障害回避を軸に、短い試行を繰り返して距離・スコア・操作精度を伸ばす遊び。"
tags:
  - "ludus"
  - "gameplay"
  - "genre"
  - "runner"
timestamp: "2026-07-15T00:00:00+09:00"
source_import_id: "ludus_supplement_20260715"
source_page_id: "ludus-editorial-supplement-20260715"
source_graph: "ludus-play-supplement.json#genre:runner"
---

# コア体験

自動的に進む移動と即時の障害回避を軸に、短い試行を繰り返して距離・スコア・操作精度を伸ばす遊び。

# 主要システム

- [自動移動とレーン操作](../systems/runner/auto-lane-control.md)
- [障害物とタイミング判定](../systems/runner/obstacle-timing.md)
- [収集物とスコア](../systems/runner/pickup-score.md)
- [コース生成](../systems/runner/procedural-track.md)
- [速度曲線と難度調整](../systems/runner/speed-curve.md)
- [失敗・即時再挑戦ループ](../systems/runner/retry-loop.md)

# 実装順序

1. 自動移動とレーン操作
2. 障害物とタイミング判定
3. 収集物とスコア
4. コース生成
5. 速度曲線と難度調整
6. 失敗・即時再挑戦ループ
