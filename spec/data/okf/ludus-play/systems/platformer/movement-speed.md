---
type: "Ludus Gameplay System"
title: "移動速度の段階化"
description: "歩行、走行、ダッシュなど速度の選択肢を提供し、状況に応じた移動を可能にする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "platformer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:platformer:movement-speed"
genre_id: "genre:platformer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

歩行、走行、ダッシュなど速度の選択肢を提供し、状況に応じた移動を可能にする。

# 設計思想

移動速度は『プレイヤーの心拍数』に相当する。速すぎると制御不能、遅すぎると退屈。加速曲線と慣性の調整で、スピード感と精密性のバランスを取る。

# 主要機能

- 歩行 (スティック軽入力またはデフォルト速度)
- 走行 (スティック全入力またはボタン押下)
- 加速曲線 (徐々に最高速度に到達する慣性)
- 急停止vs滑り (ブレーキの効き具合を調整)
- 方向転換速度 (逆方向への切り替えにかかる時間)

# UXへの寄与

- [精密制御](../../ux/2fdbde22781449d2.md)
- [操作の表現力](../../ux/7761eab6f7e5b9ca.md)
- [ゲームテンポ](../../ux/9cd0989f1776b3ba.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [音とリズム](../../domains/audio-and-rhythm.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [コヨーテタイム (Coyote Time)](./coyote-time.md) の後に実装する。
- [ジャンプバッファリング (Jump Buffering)](./jump-buffering.md) の後に実装する。
