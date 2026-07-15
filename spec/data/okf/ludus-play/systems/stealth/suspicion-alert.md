---
type: "Ludus Gameplay System"
title: "疑念と警戒状態"
description: "小さな証拠を蓄積し、平常、捜索、戦闘へ段階遷移させる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "stealth"
  - "shared-logic"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:stealth:suspicion-alert"
genre_id: "genre:stealth"
implementation_status: "shared-logic"
implementation_owner: "Ergo/Ars"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

小さな証拠を蓄積し、平常、捜索、戦闘へ段階遷移させる。

# 設計思想

即時失敗を避け中間状態をプレイ可能にする。

# 主要機能

- 疑念メーター
- 共有警戒
- 時間減衰

# UXへの寄与

- [猶予](../../ux/ff330fa401eb300e.md)
- [緊張](../../ux/a1ffa9bbe49f610d.md)

# ドメイン要素

- [対立と解決](../../domains/conflict-and-resolution.md)
- [ルールと状態](../../domains/rules-and-state.md)

# 汎用実装の判定

- **状態**: shared-logic
- **所有**: Ergo/Ars
- **判断**: 複数ジャンルで再利用しうるが、描画専用のPictorではなく上位のゲームロジック層が所有する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [可視性と騒音](./visibility-noise.md) の後に実装する。
