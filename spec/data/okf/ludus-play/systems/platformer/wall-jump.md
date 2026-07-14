---
type: "Ludus Gameplay System"
title: "壁ジャンプ/壁張り付き"
description: "垂直面を利用した移動を可能にし、レベルデザインの幅を広げる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "platformer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:platformer:wall-jump"
genre_id: "genre:platformer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

垂直面を利用した移動を可能にし、レベルデザインの幅を広げる。

# 設計思想

『環境を利用した移動』の代表例。単なる移動手段ではなくスキル表現の場となる。壁滑り速度と壁ジャンプの飛距離が、難易度とゲームテンポを決定する。

# 主要機能

- 壁検出 (レイキャスト/コライダーで壁面を判定)
- 壁滑り (壁に接触中の落下速度を減速)
- 壁ジャンプ (壁から離れる方向へのジャンプ)
- 壁張り付き時間 (無限滞在を防ぐタイムリミット)
- 入力方向制御 (壁と逆方向への入力で発動)

# UXへの寄与

- [立体的移動](../../ux/e0732e3fbcd0a0cb.md)
- [リズムゲーム的要素](../../ux/6c82bb2775628bde.md)
- [難易度の段階化](../../ux/dfb5f91973fe5ec1.md)

# ドメイン要素

- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [コンテンツとペーシング](../../domains/content-and-pacing.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [移動速度の段階化](./movement-speed.md) の後に実装する。
