---
type: "Ludus Gameplay System"
title: "ラウンド目標と勝敗"
description: "攻防目標、制限時間、生存状態からラウンドの勝敗を一意に決定する。"
tags:
  - "ludus"
  - "gameplay-system"
  - "tactical-shooter"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:tactical-shooter:round-objective"
genre_id: "genre:tactical-shooter"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

攻防目標、制限時間、生存状態からラウンドの勝敗を一意に決定する。

# 設計思想

勝敗条件を表示とサーバー判定で共有する。

# 主要機能

- 攻守交代
- 目標達成判定
- ラウンド状態機械

# UXへの寄与

- [緊張](../../ux/a1ffa9bbe49f610d.md)
- [納得感](../../ux/daf702a77e8b6d75.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)
- [目的と成長](../../domains/objectives-and-progression.md)
- [情報とUI](../../domains/information-and-ui.md)
- [ネットワークと同期](../../domains/network-and-synchronization.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- このジャンル内で先行関係は定義されていない。
