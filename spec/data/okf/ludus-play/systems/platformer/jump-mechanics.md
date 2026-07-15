---
type: "Ludus Gameplay System"
title: "ジャンプメカニクス"
description: "プレイヤーに正確かつ予測可能なジャンプ制御を提供し、空中での移動を直感的にする。"
tags:
  - "ludus"
  - "gameplay-system"
  - "platformer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:platformer:jump-mechanics"
genre_id: "genre:platformer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

プレイヤーに正確かつ予測可能なジャンプ制御を提供し、空中での移動を直感的にする。

# 設計思想

『予測可能な放物線』でありながら『制御可能な動き』でなければならない。現実の物理法則よりプレイヤーの期待する動きを優先する。可変ジャンプは『入力の強さ=結果の強さ』という直感的な関係を作る。

# 主要機能

- 可変ジャンプ高度 (ボタン押下時間で高さを調整)
- 初速と重力 (上昇速度と落下加速度)
- 最高点での減速 (頂点で滞空する『ハング』効果)
- ファストフォール (下入力で落下速度を増加)
- 二段ジャンプ/多段ジャンプ (空中で追加ジャンプ)

# UXへの寄与

- [表現力の向上](../../ux/ea1a3612562278e1.md)
- [操作の余裕](../../ux/29a041c4a3474741.md)
- [リカバリー手段](../../ux/f6c67fdaca4f3ce2.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
