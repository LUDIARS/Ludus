---
type: "Ludus Gameplay System"
title: "生活経済と解放"
description: "収入、買い物、設備投資を循環させ、できる暮らしの幅を段階的に広げる。"
tags:
  - "ludus"
  - "gameplay-system"
  - "life-sim"
  - "game-specific"
timestamp: "2026-07-15T00:00:00+09:00"
system_id: "system:life-sim:economy-progression"
genre_id: "genre:life-sim"
implementation_status: "game-specific"
implementation_owner: "Game project"
assessment_basis: "rule-based-v1; manual review required before implementation"
---

# 目的

収入、買い物、設備投資を循環させ、できる暮らしの幅を段階的に広げる。

# 設計思想

稼ぐことを目的化せず、生活の選択肢を増やす手段にする。

# 主要機能

- 売買
- 設備投資
- 機能解放

# UXへの寄与

- [前進感](../../ux/4d3da3d46e604332.md)
- [自律性](../../ux/2a19a9655634da2a.md)

# ドメイン要素

- [目的と成長](../../domains/objectives-and-progression.md)
- [物語と知識](../../domains/narrative-and-knowledge.md)

# 汎用実装の判定

- **状態**: game-specific
- **所有**: Game project
- **判断**: 現時点ではジャンル固有の設計として保持し、横断利用の実例が増えた時点で共通化を再評価する。

# Pictor候補

- なし。視覚表現に分離できる要求が具体化した時点で再評価する。

# 実装上の前提

- [住環境と装飾](./home-customization.md) の後に実装する。
