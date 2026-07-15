---
type: "Ludus Gameplay System"
title: "スライディング/ダッシュ"
description: "地上での高速移動や低い場所の通過を可能にし、アクションの幅を広げる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "platformer"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:platformer:slide-dash"
genre_id: "genre:platformer"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

地上での高速移動や低い場所の通過を可能にし、アクションの幅を広げる。

# 設計思想

『勢いの可視化』である。走行の延長線上にありプレイヤーのモメンタムを保存する。慣性の調整により、リアリティとゲーム性のバランスを取る。

# 主要機能

- スライディング (しゃがみ+移動で滑走)
- ダッシュ (短時間の爆発的加速)
- 慣性維持 (スライディング中は速度が保たれる)
- クールダウン (連続使用を防ぐ再使用待機時間)
- 姿勢変化 (スライディング中は当たり判定が低くなる)

# UXへの寄与

- [スピード感](../../ux/eba1e9c147b4b05e.md)
- [戦術性](../../ux/96f64b2a0f1c2b61.md)
- [ショートカット](../../ux/8fd49ecbb2a0b628.md)

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

- [グラウンドポンド (Ground Pound)/下突き](./ground-pound.md) の後に実装する。
