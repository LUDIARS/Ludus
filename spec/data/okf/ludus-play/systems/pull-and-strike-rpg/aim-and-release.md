---
type: "Ludus Gameplay System"
title: "照準入力とショット解放"
description: "ユニットを引く方向と強さを入力として受け取り、一手の軌道を決定する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "pull-and-strike-rpg"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:pull-and-strike-rpg:aim-and-release"
genre_id: "genre:pull-and-strike-rpg"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

ユニットを引く方向と強さを入力として受け取り、一手の軌道を決定する。

# 設計思想

操作の単純さを保ちつつ、軌道を読む余地を残す。

# 主要機能

- ドラッグ方向と距離
- 解放によるショット確定
- 入力中の照準補助

# UXへの寄与

- [直感的な狙い](../../ux/d83c66391e8e7b74.md)
- [一手の緊張](../../ux/36a259ee799f6e3e.md)

# ドメイン要素

- [アクターと役割](../../domains/actors.md)
- [入力と操作](../../domains/input-and-control.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [アクセシビリティと支援](../../domains/accessibility-and-assistance.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
